import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchDelete = (
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
            d='M12 3.75c-.97 0-1.908.135-2.796.386a.75.75 0 1 1-.408-1.444A11.758 11.758 0 0 1 12 2.25c1.11 0 2.185.154 3.204.442a.75.75 0 1 1-.408 1.444A10.258 10.258 0 0 0 12 3.75ZM12 22a8.5 8.5 0 1 1 8.126-6H18a4 4 0 0 0-4 4v1.763A8.52 8.52 0 0 1 12 22Zm0-13.75a.75.75 0 0 1 .75.75v3.7a1.5 1.5 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm7.945 10.866a.75.75 0 1 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.061 1.06l.884-.883.884.884a.75.75 0 0 0 1.06-1.061L19.062 20l.884-.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatchDelete);
export default ForwardRef;
