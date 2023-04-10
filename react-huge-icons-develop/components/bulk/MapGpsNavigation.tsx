import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapGpsNavigation = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M16.75 11.94v9.868c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.842v-9.67c0-.853-1.028-1.348-1.736-.872-.508.34-1.091.701-1.702 1.016a6.598 6.598 0 0 1-1.812 3.624Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M8.75 13.093v5.659c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-8.874a6.61 6.61 0 0 1-3.25.85c-1.18 0-2.29-.309-3.25-.85Z'
        />
        <path
            fill='currentColor'
            d='M5.372 6.915c-1.056.552-2.024 1.233-2.65 1.706A1.86 1.86 0 0 0 2 10.116v9.669c0 .854 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747v-6.97a6.622 6.622 0 0 1-1.878-5.025Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.283 7.855A5.311 5.311 0 1 0 6.718 6.75a5.311 5.311 0 0 0 10.565 1.106Zm-7.72-.185 1.342.447a.442.442 0 0 1 .28.28l.447 1.342a.443.443 0 0 0 .827.034l1.76-4.11a.443.443 0 0 0-.58-.58l-4.11 1.76a.443.443 0 0 0 .035.827Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGpsNavigation);
export default ForwardRef;
