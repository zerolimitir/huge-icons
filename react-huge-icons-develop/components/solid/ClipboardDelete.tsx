import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClipboardDelete = (
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
            d='M8.282 3.5a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Zm-1.5.031a4 4 0 0 0-3.5 3.97v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47Zm8.151 8.378a.75.75 0 0 0-1.06-1.06l-1.591 1.59-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591 1.59-1.591Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardDelete);
export default ForwardRef;
