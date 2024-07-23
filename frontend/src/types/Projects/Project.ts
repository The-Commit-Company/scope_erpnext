import { ProjectUser } from './ProjectUser'

export interface Project{
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
	/**	Series : Select	*/
	naming_series: "PROJ-.####"
	/**	Project Name : Data	*/
	project_name: string
	/**	Status : Select	*/
	status?: "Open" | "Completed" | "Cancelled"
	/**	Project Type : Link - Project Type	*/
	project_type?: string
	/**	Is Active : Select	*/
	is_active?: "Yes" | "No"
	/**	% Complete Method : Select	*/
	percent_complete_method?: "Manual" | "Task Completion" | "Task Progress" | "Task Weight"
	/**	% Completed : Percent	*/
	percent_complete?: number
	/**	From Template : Link - Project Template	*/
	project_template?: string
	/**	Expected Start Date : Date	*/
	expected_start_date?: string
	/**	Expected End Date : Date	*/
	expected_end_date?: string
	/**	Priority : Select	*/
	priority?: "Medium" | "Low" | "High"
	/**	Department : Link - Department	*/
	department?: string
	/**	Customer : Link - Customer	*/
	customer?: string
	/**	Sales Order : Link - Sales Order	*/
	sales_order?: string
	/**	Users : Table - Project User - Project will be accessible on the website to these users	*/
	users?: ProjectUser[]
	/**	Copied From : Data	*/
	copied_from?: string
	/**	Notes : Text Editor	*/
	notes?: string
	/**	Actual Start Date (via Timesheet) : Date	*/
	actual_start_date?: string
	/**	Actual Time in Hours (via Timesheet) : Float	*/
	actual_time?: number
	/**	Actual End Date (via Timesheet) : Date	*/
	actual_end_date?: string
	/**	Estimated Cost : Currency	*/
	estimated_costing?: number
	/**	Total Costing Amount (via Timesheet) : Currency	*/
	total_costing_amount?: number
	/**	Total Expense Claim (via Expense Claims) : Currency	*/
	total_expense_claim?: number
	/**	Total Purchase Cost (via Purchase Invoice) : Currency	*/
	total_purchase_cost?: number
	/**	Company : Link - Company	*/
	company: string
	/**	Total Sales Amount (via Sales Order) : Currency	*/
	total_sales_amount?: number
	/**	Total Billable Amount (via Timesheet) : Currency	*/
	total_billable_amount?: number
	/**	Total Billed Amount (via Sales Invoice) : Currency	*/
	total_billed_amount?: number
	/**	Total Consumed Material Cost (via Stock Entry) : Currency	*/
	total_consumed_material_cost?: number
	/**	Default Cost Center : Link - Cost Center	*/
	cost_center?: string
	/**	Gross Margin : Currency	*/
	gross_margin?: number
	/**	Gross Margin % : Percent	*/
	per_gross_margin?: number
	/**	Collect Progress : Check	*/
	collect_progress?: 0 | 1
	/**	Holiday List : Link - Holiday List	*/
	holiday_list?: string
	/**	Frequency To Collect Progress : Select	*/
	frequency?: "Hourly" | "Twice Daily" | "Daily" | "Weekly"
	/**	From Time : Time	*/
	from_time?: string
	/**	To Time : Time	*/
	to_time?: string
	/**	First Email : Time	*/
	first_email?: string
	/**	Second Email : Time	*/
	second_email?: string
	/**	Daily Time to send : Time	*/
	daily_time_to_send?: string
	/**	Day to Send : Select	*/
	day_to_send?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
	/**	Weekly Time to send : Time	*/
	weekly_time_to_send?: string
	/**	Message : Text - Message will be sent to the users to get their status on the Project	*/
	message?: string
}