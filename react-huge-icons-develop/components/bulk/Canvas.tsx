import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCanvas = (
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
            d='m6.795 17.993-1.491 3.729a.75.75 0 1 0 1.392.557L8.408 18H7c-.069 0-.137-.002-.205-.007ZM11.25 18v3a.75.75 0 1 0 1.5 0v-3h-1.5Zm4.342 0 1.712 4.279a.75.75 0 1 0 1.392-.557l-1.491-3.729A3.088 3.088 0 0 1 17 18h-1.408ZM12 1.25c.414 0 .75.372.75.832v1.916h-1.5V2.082c0-.46.336-.832.75-.832Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCanvas);
export default ForwardRef;
