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
            fillRule='evenodd'
            d='M15.027 3.254a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM9.117 9.53a.75.75 0 0 0-1.062-1.06L6.763 9.763a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06l-.72-.72H10c.69 0 1.25.56 1.25 1.25v3a.75.75 0 0 0 1.5 0v-3c0-.69.56-1.25 1.25-1.25h1.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L15.945 8.47a.75.75 0 1 0-1.061 1.06l.72.72H14c-.788 0-1.499.331-2 .863a2.742 2.742 0 0 0-2-.863H8.396l.72-.72Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnTwoSide);
export default ForwardRef;
