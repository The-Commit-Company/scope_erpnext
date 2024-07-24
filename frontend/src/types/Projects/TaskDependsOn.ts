
export interface TaskDependsOn{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Task : Link - Task	*/
	task?: string
	/**	Subject : Text	*/
	subject?: string
	/**	Project : Text	*/
	project?: string
}