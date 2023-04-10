import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTeacherThin = (
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
            d='M1.343 20.639a.75.75 0 1 0 1.314.722l-1.314-.722Zm13.339-5.326a.75.75 0 0 0-1.364-.626l1.364.626ZM7.25 8a.75.75 0 0 0 1.5 0h-1.5Zm9.49 6.25a.75.75 0 0 0 0 1.5v-1.5Zm-4.74-8a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 13h-1.5ZM8 14.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 15.75v-1.5ZM6.75 13c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 13h1.5ZM8 11.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 10.25v1.5Zm-5.343 9.611C3.02 20.704 4.66 19.023 8 19.023v-1.5c-3.86 0-6.019 1.955-6.657 3.116l1.314.722ZM8 19.023c3.932 0 6.077-2.39 6.682-3.71l-1.364-.626c-.395.862-2.05 2.836-5.318 2.836v1.5ZM8.75 8V5h-1.5v3h1.5ZM10 3.75h10v-1.5H10v1.5ZM21.25 5v8h1.5V5h-1.5ZM20 14.25h-3.26v1.5H20v-1.5ZM21.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 13h-1.5ZM20 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 2.25v1.5ZM8.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 5h1.5ZM12 7.75h6v-1.5h-6v1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M15 11h3' />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacherThin);
export default ForwardRef;
