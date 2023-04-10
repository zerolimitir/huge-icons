import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyRemove = (
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
            d='M6 4h12a4 4 0 0 1 4 4v5a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm6.945 5.116a.75.75 0 1 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.061l.883.884-.884.884a.75.75 0 1 0 1.061 1.06l.884-.883.884.884a.75.75 0 1 0 1.06-1.061L20.062 18l.884-.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyRemove);
export default ForwardRef;
