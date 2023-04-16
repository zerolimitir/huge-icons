import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWidgets = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M16.871 1.119A2.91 2.91 0 0 0 16 1.43c-.215.116-.55.429-1.935 1.805-1.768 1.758-1.974 1.998-2.141 2.493-.263.776-.177 1.654.226 2.332.102.171.606.706 1.766 1.873.893.898 1.707 1.694 1.808 1.769.252.187.606.357.917.441.399.109 1.087.094 1.505-.031.587-.176.656-.233 2.539-2.111 1.895-1.89 1.926-1.928 2.121-2.561.073-.238.092-.395.093-.76.001-.648-.111-1.04-.445-1.55-.174-.266-2.929-3.06-3.362-3.41a2.871 2.871 0 0 0-1.014-.542c-.267-.073-.95-.107-1.207-.059M3.66 1.278c-1.092.134-2 .914-2.308 1.982-.092.318-.092.332-.092 2.74 0 2.408 0 2.422.092 2.74a2.797 2.797 0 0 0 1.908 1.908c.318.092.332.092 2.74.092 2.408 0 2.422 0 2.74-.092a2.797 2.797 0 0 0 1.908-1.908c.092-.318.092-.332.092-2.74 0-2.408 0-2.422-.092-2.74A2.813 2.813 0 0 0 8.76 1.355c-.294-.088-.347-.09-2.58-.098-1.254-.005-2.388.004-2.52.021m14.22 1.429c.188.083.448.325 1.768 1.645 1.754 1.754 1.761 1.763 1.761 2.304 0 .524.022.496-1.801 2.312-1.512 1.507-1.643 1.627-1.841 1.691-.294.096-.723.071-.973-.055-.132-.067-.653-.563-1.785-1.699-1.49-1.495-1.604-1.62-1.669-1.82-.092-.285-.068-.758.051-.985.104-.199 3.215-3.305 3.405-3.4.31-.155.725-.153 1.084.007m-9.426.134c.29.109.596.415.705.705.078.209.081.304.081 2.454 0 2.581.011 2.498-.366 2.874-.376.377-.293.366-2.874.366-2.15 0-2.245-.003-2.454-.081a1.336 1.336 0 0 1-.706-.708c-.08-.215-.082-.282-.071-2.526.011-2.278.012-2.307.098-2.467.157-.293.484-.573.773-.661.055-.016 1.112-.032 2.348-.034 2.166-.003 2.257 0 2.466.078M3.66 13.278c-1.092.134-2 .914-2.308 1.982-.092.318-.092.332-.092 2.74 0 2.408 0 2.422.092 2.74a2.797 2.797 0 0 0 1.908 1.908c.318.092.332.092 2.74.092 2.408 0 2.422 0 2.74-.092a2.797 2.797 0 0 0 1.908-1.908c.092-.318.092-.332.092-2.74 0-2.408 0-2.422-.092-2.74a2.813 2.813 0 0 0-1.888-1.905c-.294-.088-.347-.09-2.58-.098-1.254-.005-2.388.004-2.52.021m12 0c-1.092.134-2 .914-2.308 1.982-.092.318-.092.332-.092 2.74 0 2.408 0 2.422.092 2.74a2.797 2.797 0 0 0 1.908 1.908c.318.092.332.092 2.74.092 2.408 0 2.422 0 2.74-.092a2.797 2.797 0 0 0 1.908-1.908c.092-.318.092-.332.092-2.74 0-2.408 0-2.422-.092-2.74a2.813 2.813 0 0 0-1.888-1.905c-.294-.088-.347-.09-2.58-.098-1.254-.005-2.388.004-2.52.021m-7.206 1.563c.29.109.596.415.705.705.078.209.081.304.081 2.454 0 2.581.011 2.498-.366 2.874-.376.377-.293.366-2.874.366-2.15 0-2.245-.003-2.454-.081a1.336 1.336 0 0 1-.706-.708c-.08-.215-.082-.282-.071-2.526.011-2.278.012-2.307.098-2.467.157-.293.484-.573.773-.661.055-.016 1.112-.032 2.348-.034 2.166-.003 2.257 0 2.466.078m12 0c.29.109.596.415.705.705.078.209.081.304.081 2.454 0 2.581.011 2.498-.366 2.874-.376.377-.293.366-2.874.366-2.15 0-2.245-.003-2.454-.081a1.336 1.336 0 0 1-.706-.708c-.08-.215-.082-.282-.071-2.526.011-2.278.012-2.307.098-2.467.157-.293.484-.573.773-.661.055-.016 1.112-.032 2.348-.034 2.166-.003 2.257 0 2.466.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWidgets);
export default ForwardRef;