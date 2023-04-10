import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaperPin = (
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
            d='M7 7.828v2.344a2 2 0 0 1-.586 1.414C5.154 12.846 6.047 15 7.828 15h3.422v6a.75.75 0 0 0 1.5 0v-6h3.422c1.781 0 2.674-2.154 1.414-3.414A2 2 0 0 1 17 10.172V7.828a2 2 0 0 1 .586-1.414C18.846 5.154 17.953 3 16.172 3H7.828C6.047 3 5.154 5.154 6.414 6.414A2 2 0 0 1 7 7.828Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaperPin);
export default ForwardRef;
