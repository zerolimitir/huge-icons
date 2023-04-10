import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyCoin = (
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
            d='M18 2.75H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5c0-.744.232-1.433.627-2A3.5 3.5 0 0 1 14 9.25h6v-4.5a2 2 0 0 0-2-2Zm-6 10a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4 2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4 2 2 0 0 1-2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyCoin);
export default ForwardRef;
