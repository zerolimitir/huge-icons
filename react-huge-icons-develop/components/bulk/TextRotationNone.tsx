import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextRotationNone = (
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
            d='M12 2.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.577l-1.475-3.539H9.167l-1.475 3.539a.75.75 0 0 1-1.384-.578l5-12A.75.75 0 0 1 12 2.25Zm-2.208 8h4.416L12 4.95l-2.208 5.3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.53 19.53a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H4a.75.75 0 0 0 0 1.5h14.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationNone);
export default ForwardRef;
