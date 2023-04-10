import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTable = (
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
        <path fill='currentColor' d='M12 21H7a4 4 0 0 1-4-4v-1.824h9V21Z' />
        <path fill='currentColor' d='M12 15.177V8.824H3v6.353h9Z' opacity={0.4} />
        <path fill='currentColor' d='M7 3h5v5.824H3V7a4 4 0 0 1 4-4Z' />
        <path fill='currentColor' d='M12 21h5a4 4 0 0 0 4-4v-1.824h-9V21Z' opacity={0.4} />
        <path fill='currentColor' d='M12 15.177V8.824h9v6.353h-9Z' />
        <path fill='currentColor' d='M17 3h-5v5.824h9V7a4 4 0 0 0-4-4Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;
