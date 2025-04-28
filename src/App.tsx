import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Interface agora com nomes em inglês
interface TestRow {
  step: string;
  keyState: string;
  variables: string;
  action: string;
  result: string;
  observations: string;
}

export default function TestTableApp() {
  const [rows, setRows] = useState<TestRow[]>([]);
  const [newRow, setNewRow] = useState<TestRow>({
    step: "",
    keyState: "",
    variables: "",
    action: "",
    result: "",
    observations: ""
  });

  const addRow = () => {
    setRows([...rows, newRow]);
    setNewRow({ step: "", keyState: "", variables: "", action: "", result: "", observations: "" });
  };

  const clearTable = () => {
    setRows([]);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Test Table</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            <Input placeholder="Step" value={newRow.step} onChange={(e) => setNewRow({ ...newRow, step: e.target.value })} />
            <Input placeholder="Key State" value={newRow.keyState} onChange={(e) => setNewRow({ ...newRow, keyState: e.target.value })} />
            <Input placeholder="Variables" value={newRow.variables} onChange={(e) => setNewRow({ ...newRow, variables: e.target.value })} />
            <Input placeholder="Action" value={newRow.action} onChange={(e) => setNewRow({ ...newRow, action: e.target.value })} />
            <Input placeholder="Result" value={newRow.result} onChange={(e) => setNewRow({ ...newRow, result: e.target.value })} />
            <Input placeholder="Observations" value={newRow.observations} onChange={(e) => setNewRow({ ...newRow, observations: e.target.value })} />
          </div>
          <div className="flex gap-2">
            <Button onClick={addRow}>Add Row</Button>
            <Button variant="destructive" onClick={clearTable}>Clear Table</Button>
          </div>
        </CardContent>
      </Card>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Step</th>
              <th className="border p-2">Key State</th>
              <th className="border p-2">Variables</th>
              <th className="border p-2">Action</th>
              <th className="border p-2">Result</th>
              <th className="border p-2">Observations</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="border p-2">{row.step}</td>
                <td className="border p-2">{row.keyState}</td>
                <td className="border p-2">{row.variables}</td>
                <td className="border p-2">{row.action}</td>
                <td className="border p-2">{row.result}</td>
                <td className="border p-2">{row.observations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
