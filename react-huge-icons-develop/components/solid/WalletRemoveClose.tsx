import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletRemoveClose = (
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
            d='M18 3a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V7a4 4 0 0 1 4-4h12ZM8 12a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm12.945 6.116a.75.75 0 1 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.061 1.06l.884-.883.884.884a.75.75 0 1 0 1.06-1.061L20.062 19l.884-.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletRemoveClose);
export default ForwardRef;
