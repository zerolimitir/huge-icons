import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTurn = (
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
            d='m12.75 7.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 7.055a.75.75 0 0 0 1.06 1.061l.72-.72v5.14A4.733 4.733 0 0 0 8 11.25h-.604l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 0 0 1.061-1.06l-.72-.72H8A3.25 3.25 0 0 1 11.25 16v1a.75.75 0 0 0 1.5 0v-1A3.25 3.25 0 0 1 16 12.75h.604l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L16.945 9.47a.75.75 0 1 0-1.061 1.06l.72.72H16c-1.257 0-2.4.488-3.25 1.286v-5.14Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurn);
export default ForwardRef;
