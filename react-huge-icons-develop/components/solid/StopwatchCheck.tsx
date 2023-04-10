import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchCheck = (
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
            d='M12 3.75c-.97 0-1.908.135-2.796.386a.75.75 0 1 1-.408-1.444A11.758 11.758 0 0 1 12 2.25c1.11 0 2.185.154 3.204.442a.75.75 0 1 1-.408 1.444A10.258 10.258 0 0 0 12 3.75ZM12 22a8.5 8.5 0 1 1 8.126-6H18a4 4 0 0 0-4 4v1.763A8.52 8.52 0 0 1 12 22Zm0-13.75a.75.75 0 0 1 .75.75v3.7a1.5 1.5 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm8.592 10.21a.75.75 0 0 0-1.184-.92l-1.674 2.151a.25.25 0 0 1-.364.033l-.868-.781a.75.75 0 1 0-1.004 1.114l.868.782a1.75 1.75 0 0 0 2.552-.227l1.674-2.151Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatchCheck);
export default ForwardRef;
