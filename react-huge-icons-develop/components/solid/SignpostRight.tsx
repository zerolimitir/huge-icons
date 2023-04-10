import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostRight = (
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
            d='M12.5 2h-1a1 1 0 0 0-1 1v1.314l3-.804V3a1 1 0 0 0-1-1Zm-1 20h1a1 1 0 0 0 1-1v-1h-3v1a1 1 0 0 0 1 1Zm-1-10.51 3-.804V13h-3v-1.51Zm0-6.176L5.557 6.638a1 1 0 0 0-.707 1.225l.776 2.898a1 1 0 0 0 1.225.707l3.649-.978 3-.804 3.512-.94a1 1 0 0 0 .657-.565l.771-1.76a1 1 0 0 0-.323-1.207l-1.548-1.138a1 1 0 0 0-.851-.16L13.5 4.51l-3 .804Zm0 8.686H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10.52a1 1 0 0 0 .78-.375l1.2-1.5a1 1 0 0 0 0-1.25l-1.2-1.5a1 1 0 0 0-.78-.375H10.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostRight);
export default ForwardRef;
