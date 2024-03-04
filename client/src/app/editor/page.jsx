import { CodeEditor } from "@/components/Editor"
import { EditorBtns } from "@/components/EditorBtns"
import { EditorHeader } from "@/components/EditorTop"

const { InputOutputs } = require("@/components/CodeOutput")

export default function(){
    return <>
    <div className="flex flex-col p-2">
        <EditorHeader/>
        <div className="flex w-full border border-black h-[95vh] justify-center gap-3">
            <div className="flex flex-col w-full h-full bg-slate-700 rounded-lg p-3">
                <div className="flex h-2/3 w-full bg-slate-600">
                    <h1 className="text-4xl">Up</h1>
                </div>
                <div className="flex h-1/3 w-full bg-slate-900">
                    <h1 className="text-4xl">Down</h1>
                </div>
            </div>
            <div className="flex flex-col w-full h-full bg-zinc-900 rounded-lg p-3">
                <CodeEditor/>
                <EditorBtns/>
                <InputOutputs/>
            </div>
        </div>
    </div>
    </>
}