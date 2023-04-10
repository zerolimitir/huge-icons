import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTurnTwoSide = (
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
            d='M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.116 8.47a.75.75 0 0 1 0 1.06l-.72.72H10c.788 0 1.499.331 2 .863a2.742 2.742 0 0 1 2-.863h1.604l-.72-.72a.75.75 0 0 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H14c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0v-3c0-.69-.56-1.25-1.25-1.25H8.396l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L8.055 8.47a.75.75 0 0 1 1.061 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnTwoSide);
export default ForwardRef;
