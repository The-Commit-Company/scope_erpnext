
export interface ProjectUser{
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
	/**	User : Link - User	*/
	user: string
	/**	Email : Read Only	*/
	email?: string
	/**	Image : Read Only	*/
	image?: string
	/**	Full Name : Read Only	*/
	full_name?: string
	/**	Welcome email sent : Check	*/
	welcome_email_sent?: 0 | 1
	/**	View attachments : Check	*/
	view_attachments?: 0 | 1
	/**	Project Status : Text	*/
	project_status?: string
}