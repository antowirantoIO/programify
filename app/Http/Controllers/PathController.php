<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePathRequest;
use App\Http\Requests\UpdatePathRequest;
use App\Models\Path;

class PathController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('path.index');
        // TODO: Create some amazing
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('path.create');
        // TODO: Create some amazing
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePathRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePathRequest $request)
    {
        $this->authorize('path.store');
        // TODO: Create some amazing
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Path  $path
     * @return \Illuminate\Http\Response
     */
    public function show(Path $path)
    {
        $this->authorize('path.show');
        // TODO: Create some amazing
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Path  $path
     * @return \Illuminate\Http\Response
     */
    public function edit(Path $path)
    {
        $this->authorize('path.edit');
        // TODO: Create some amazing
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePathRequest  $request
     * @param  \App\Models\Path  $path
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePathRequest $request, Path $path)
    {
        $this->authorize('path.update');
        // TODO: Create some amazing
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Path  $path
     * @return \Illuminate\Http\Response
     */
    public function destroy(Path $path)
    {
        $this->authorize('path.destroy');
        // TODO: Create some amazing
    }
}
