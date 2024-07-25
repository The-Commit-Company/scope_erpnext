import { useFrappeGetCall } from "frappe-react-sdk"

const useDoctypeMeta = (doctype?: string) => {

    const { data, error, isLoading } = useFrappeGetCall('frappe.desk.form.load.getdoctype', {
        doctype: doctype,
        with_parent: 1
    }, doctype ? `doctype-meta-${doctype}` : null, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        doctypeMeta: data?.docs[0],
        error,
        isLoading
    }

}

export default useDoctypeMeta