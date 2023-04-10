import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLibrary = (
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
            d='M17 7.141a5 5 0 0 0-10 0c0 2.762 5 7 5 7s5-4.238 5-7Zm-3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7.94-.89a6.469 6.469 0 0 0-.06.89c0 1.097.478 2.164.993 3.027.536.899 1.228 1.766 1.886 2.506a29.61 29.61 0 0 0 1.813 1.855l1.058.943v6.387c-1.901-1.26-4.505-1.836-6.455-2.054C3.807 19.695 3 18.88 3 17.875V7.86c0-1.005.807-1.82 1.795-1.71.246.028.502.06.766.1Zm7.19 15.608v-6.387l1.059-.943c.49-.461 1.148-1.11 1.812-1.855.658-.74 1.35-1.607 1.886-2.506.515-.863.993-1.93.993-3.027a6.55 6.55 0 0 0-.06-.89c.263-.04.52-.072.765-.1.988-.11 1.795.705 1.795 1.71v10.013c0 1.006-.807 1.821-1.795 1.931-1.95.218-4.554.795-6.455 2.054Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
