import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHangout = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 4.974 4.403 9.056 9.3 9.164.11.003.2.092.2.203v2.686c0 .148.156.244.288.177 5.583-2.854 9.212-7.453 9.212-12.23C21.5 5.308 17.248 1 12 1Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17.238 11.808c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2h-1.579a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6a.2.2 0 0 1 .2.2v3.608Zm-6.477 0c0 1.096-.984 2.04-1.821 2.175-.11.018-.2-.072-.2-.183v-1.908a.2.2 0 0 0-.2-.2H6.962a.2.2 0 0 1-.2-.2V8.2c0-.11.09-.2.2-.2h3.6c.11 0 .2.09.2.2v3.608Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHangout);
export default ForwardRef;
