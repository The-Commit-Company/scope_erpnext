import useDoctypeMeta from '@/hooks/useDoctypeMeta'
import { useFrappeGetDocList } from 'frappe-react-sdk'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const LAYOUT_FIELD_TYPES = ["Tab Break", "Section Break", "Column Break",
    "Button", "HTML", "Image",
    "Fold", "Table", "Table Multiselect"]

const List = () => {

    const { doctype } = useParams()

    const { doctypeMeta, isLoading } = useDoctypeMeta(doctype)

    const columns = useMemo(() => {
        if (doctypeMeta) {
            const fields = []

            for (const field of doctypeMeta.fields) {

                if (field.hidden) continue
                if (LAYOUT_FIELD_TYPES.includes(field.fieldtype)) continue

                fields.push({
                    field: field.fieldname,
                    headerName: field.label,
                    editable: true,
                })
            }

            return fields
        } else {
            return []
        }

    }, [doctypeMeta])

    const { data } = useFrappeGetDocList(doctype, {
        fields: columns.map(col => col.field),
    })




    return (
        // wrapping container with theme & size
        <div className='p-4'>
            <h1>{doctype}</h1>
            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{ height: "90vh" }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={data}
                    columnDefs={columns}
                />
            </div>
        </div>

    )

}

export default List