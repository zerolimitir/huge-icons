import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGpsOff = (
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
            fillRule='evenodd'
            d='M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a7.949 7.949 0 0 1-.988 3.167l-3.28-3.281a3.75 3.75 0 0 0-4.332-4.332L8.082 5.023a7.95 7.95 0 0 1 3.168-.988V2a.75.75 0 0 1 .75-.75Zm-7.965 10H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a7.964 7.964 0 0 0 4.352-1.803l3.368 3.368a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06l3.368 3.368a7.964 7.964 0 0 0-1.803 4.353ZM9.75 12a2.25 2.25 0 0 0 3.22 2.03l1.098 1.099a3.75 3.75 0 0 1-5.197-5.197L9.97 11.03a2.24 2.24 0 0 0-.219.97Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsOff);
export default ForwardRef;
