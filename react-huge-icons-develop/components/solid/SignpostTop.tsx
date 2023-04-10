import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostTop = (
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
            d='M12.5 2h-1a1 1 0 0 0-1 1v2.938l3-1.732V3a1 1 0 0 0-1-1Zm-2 19v-4.67l3-1.732V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm0-13.33L3.866 11.5a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l3.634-2.098 3-1.732 5.131-2.963a1 1 0 0 0 .466-.607l.732-2.732a1 1 0 0 0-.707-1.225l-2.732-.732a1 1 0 0 0-.758.1L13.5 5.937l-3 1.733Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostTop);
export default ForwardRef;
