import { TaskDependsOn } from './TaskDependsOn'

export interface Task {
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
	_assign?: string
	/**	Subject : Data	*/
	subject: string
	/**	Project : Link - Project	*/
	project?: string
	/**	Issue : Link - Issue	*/
	issue?: string
	/**	Type : Link - Task Type	*/
	type?: string
	/**	Color : Color	*/
	color?: string
	/**	Is Group : Check	*/
	is_group?: 0 | 1
	/**	Is Template : Check	*/
	is_template?: 0 | 1
	/**	Status : Select	*/
	status?: "Open" | "Working" | "Pending Review" | "Overdue" | "Template" | "Completed" | "Cancelled"
	/**	Priority : Select	*/
	priority?: "Low" | "Medium" | "High" | "Urgent"
	/**	Weight : Float	*/
	task_weight?: number
	/**	Parent Task : Link - Task	*/
	parent_task?: string
	/**	Completed By : Link - User	*/
	completed_by?: string
	/**	Completed On : Date	*/
	completed_on?: string
	/**	Expected Start Date : Date	*/
	exp_start_date?: string
	/**	Expected Time (in hours) : Float	*/
	expected_time?: number
	/**	Begin On (Days) : Int	*/
	start?: number
	/**	Expected End Date : Date	*/
	exp_end_date?: string
	/**	% Progress : Percent	*/
	progress?: number
	/**	Duration (Days) : Int	*/
	duration?: number
	/**	Is Milestone : Check	*/
	is_milestone?: 0 | 1
	/**	Task Description : Text Editor	*/
	description?: string
	/**	Dependent Tasks : Table - Task Depends On	*/
	depends_on?: TaskDependsOn[]
	/**	Depends on Tasks : Code	*/
	depends_on_tasks?: string
	/**	Actual Start Date (via Timesheet) : Date	*/
	act_start_date?: string
	/**	Actual Time in Hours (via Timesheet) : Float	*/
	actual_time?: number
	/**	Actual End Date (via Timesheet) : Date	*/
	act_end_date?: string
	/**	Total Costing Amount (via Timesheet) : Currency	*/
	total_costing_amount?: number
	/**	Total Expense Claim (via Expense Claim) : Currency	*/
	total_expense_claim?: number
	/**	Total Billable Amount (via Timesheet) : Currency	*/
	total_billing_amount?: number
	/**	Review Date : Date	*/
	review_date?: string
	/**	Closing Date : Date	*/
	closing_date?: string
	/**	Department : Link - Department	*/
	department?: string
	/**	Company : Link - Company	*/
	company?: string
	/**	lft : Int	*/
	lft?: number
	/**	rgt : Int	*/
	rgt?: number
	/**	Old Parent : Data	*/
	old_parent?: string
	/**	Template Task : Data	*/
	template_task?: string
}