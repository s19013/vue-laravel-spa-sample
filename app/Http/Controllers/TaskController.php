<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use DB;

class TaskController extends Controller
{
    public function index(){return Task::all();}

    public function show(Task $task){return $task;}
    // これだけで良いみたい 勝手にjsonに変換してくれるらしい

    public function store(Request $request){
        DB::transaction(function() use($request){
            Task::create($request->all());
        });
    }

    public function update(Request $request)
    {
        // 見つけて変数に代入
        $task = Task::find($request->id);
        // 更新
        DB::transaction(function () use($request,$task){
            $task->title    = $request->title;
            $task->content  = $request->content;
            $task->person_in_charge     = $request->person_in_charge;

            $task->save();
        });
    }

    public function destroy(Task $task)
    {
        DB::transaction(function () {
            $task->delete();
        });
    }
}
