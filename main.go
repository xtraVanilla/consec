package main

import (
	"encoding/json"
	"fmt"
	"syscall/js"
)

type Func struct {
	Name string
	Args []string
}

type FunctionList []Func

type Result struct {
	Res  string
	Name string
}

func callFunc(name string) string {
	res := js.Global().Call(name).String()
	return res
}

func callAllFuncs(funcs FunctionList) []interface{} {
	var results []interface{}

	for _, s := range funcs {
		res := callFunc(s.Name)
		results = append(results, res)
	}

	return results
}

func consec(this js.Value, args []js.Value) interface{} {
	a := args[0].String()
	var funcs FunctionList
	err := json.Unmarshal([]byte(a), &funcs)
	if err != nil {
		fmt.Println(err.Error())
	}

	return callAllFuncs(funcs)
}

func main() {
	js.Global().Set("consec", js.FuncOf(consec))
	<-make(chan bool)
}
