import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMask = (
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
            d='M20 6.75c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V8a2.75 2.75 0 1 1 5.5 0v4A4.75 4.75 0 0 1 18 16.75v-1.5A3.25 3.25 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25Zm-16 0c.69 0 1.25.56 1.25 1.25v3a.75.75 0 0 0 1.5 0V8a2.75 2.75 0 0 0-5.5 0v4A4.75 4.75 0 0 0 6 16.75v-1.5A3.25 3.25 0 0 1 2.75 12V8c0-.69.56-1.25 1.25-1.25Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9.876 7.224a4.75 4.75 0 0 1 4.248 0l4.211 2.105a.75.75 0 0 1 .415.671v5.127a4.75 4.75 0 0 1-1.71 3.649l-.719.6a6.75 6.75 0 0 1-8.642 0l-.72-.6a4.75 4.75 0 0 1-1.709-3.65V10a.75.75 0 0 1 .415-.67l4.21-2.106Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMask);
export default ForwardRef;
