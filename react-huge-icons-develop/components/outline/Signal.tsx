import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignal = (
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
            d='M22.75 4a.75.75 0 1 0-1.5 0h1.5Zm-1.5 16a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-13a.75.75 0 1 0-1.5 0h1.5Zm-1.5 13a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-10a.75.75 0 1 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-7a.75.75 0 1 0-1.5 0h1.5Zm-1.5 7a.75.75 0 0 0 1.5 0h-1.5Zm-4 0a.75.75 0 0 0 1.5 0h-1.5Zm-.751-8.877.585-.468-.585.469Zm3.002 0 .586.469-.586-.469ZM21.25 4v16h1.5V4h-1.5Zm-4 3v13h1.5V7h-1.5Zm-4 3v10h1.5V10h-1.5Zm-4 3v7h1.5v-7h-1.5Zm-4 0v7h1.5v-7h-1.5Zm1.335-.469-1.5-1.876-1.172.937 1.501 1.877 1.171-.938Zm.33-1.876-1.5 1.877 1.17.937 1.502-1.877-1.172-.937ZM6 8.75c.983 0 1.53 1.137.915 1.905l1.172.937C9.487 9.842 8.24 7.25 6 7.25v1.5Zm-.916 1.905C4.47 9.887 5.017 8.75 6 8.75v-1.5c-2.241 0-3.487 2.592-2.087 4.342l1.171-.937Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignal);
export default ForwardRef;
