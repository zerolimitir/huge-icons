import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoomOut = (
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
            d='M17.97 17.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm2-5.399c.414 0 .75-.269.75-.6 0-.333-.336-.602-.75-.602h-4c-.414 0-.75.269-.75.601 0 .332.336.601.75.601h4Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.25 7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7v1.625a.75.75 0 0 1-1.5 0V7A3.25 3.25 0 0 0 17 3.75H7A3.25 3.25 0 0 0 3.75 7v10A3.25 3.25 0 0 0 7 20.25h1.625a.75.75 0 0 1 0 1.5H7A4.75 4.75 0 0 1 2.25 17V7Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomOut);
export default ForwardRef;
