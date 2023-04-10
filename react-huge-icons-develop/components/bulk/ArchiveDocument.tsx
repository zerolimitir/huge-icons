import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveDocument = (
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
        <path fill='currentColor' d='M7 2h10a4 4 0 0 1 4 4v6H3V6a4 4 0 0 1 4-4Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6ZM7 22h10a4 4 0 0 0 4-4v-6H3v6a4 4 0 0 0 4 4Zm3-6.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveDocument);
export default ForwardRef;
