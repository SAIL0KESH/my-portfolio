 // app/api/visitors/route.ts
import { NextResponse } from "next/server";

const {
  AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
  DDB_TABLE = "PortfolioVisitors", DDB_PARTITION_KEY = "id",
  DDB_PARTITION_VALUE = "global",
} = process.env;

export async function GET() {
  const hasAws = AWS_REGION && AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY;
  if (!hasAws) {
    // dev fallback (no persistence)
    return NextResponse.json({ count: 123 }); // change any number you like locally
  }

  const { DynamoDBClient } = await import("@aws-sdk/client-dynamodb");
  const { UpdateCommand } = await import("@aws-sdk/lib-dynamodb");
  const { DynamoDBDocumentClient } = await import("@aws-sdk/lib-dynamodb");

  const ddb = new DynamoDBClient({ region: AWS_REGION });
  const doc = DynamoDBDocumentClient.from(ddb);

  const cmd = new UpdateCommand({
    TableName: DDB_TABLE,
    Key: { [DDB_PARTITION_KEY]: DDB_PARTITION_VALUE },
    UpdateExpression: "ADD #c :inc",
    ExpressionAttributeNames: { "#c": "count" },
    ExpressionAttributeValues: { ":inc": 1 },
    ReturnValues: "UPDATED_NEW",
  });

  const res = await doc.send(cmd);
  const count = (res.Attributes as any)?.count ?? 1;
  return NextResponse.json({ count });
}
