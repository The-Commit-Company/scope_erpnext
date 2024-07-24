import frappe

@frappe.whitelist()
def get_user_avatar(user):
    return  {
        "image": frappe.get_cached_value('User', user, 'user_image'),
        "full_name": frappe.get_cached_value('User', user, 'full_name')
    }