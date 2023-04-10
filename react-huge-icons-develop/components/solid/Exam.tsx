import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExam = (
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
            d='M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm3.25 4a2.75 2.75 0 0 1 5.5 0v3a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V9Zm4 .25V9a1.25 1.25 0 1 0-2.5 0v.25h2.5Zm-4 5.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 17.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H7Zm6.25-9.75a.75.75 0 0 1 .75-.75h.75V6a.75.75 0 0 1 1.5 0v.75H17a.75.75 0 0 1 0 1.5h-.75V9a.75.75 0 0 1-1.5 0v-.75H14a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExam);
export default ForwardRef;
