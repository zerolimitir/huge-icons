import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLightMode = (
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
        <path fill='currentColor' d='M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm9.31-12.625a.75.75 0 0 1-.275 1.025l-1.732 1a.75.75 0 1 1-.75-1.3l1.732-1a.75.75 0 0 1 1.025.275Zm-15.589 9a.75.75 0 0 1-.274 1.025l-1.732 1a.75.75 0 0 1-.75-1.3l1.732-1a.75.75 0 0 1 1.024.275Zm-3.031-9a.75.75 0 0 1 1.025-.275l1.732 1a.75.75 0 1 1-.75 1.3l-1.732-1a.75.75 0 0 1-.275-1.025Zm15.589 9a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 0 1-.75 1.3l-1.732-1a.75.75 0 0 1-.274-1.025Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLightMode);
export default ForwardRef;
