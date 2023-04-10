import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAccessibility = (
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
            d='M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.272 5.82a.75.75 0 0 1 .907-.548c2.681.66 4.716.979 6.754.978 2.04-.001 4.12-.322 6.894-.98a.75.75 0 0 1 .346 1.46c-1.952.463-3.609.772-5.173.92v4.305l.744 5.952a.75.75 0 1 1-1.488.186L12.494 12h-.988l-.762 6.093a.75.75 0 1 1-1.488-.186L10 11.952v-4.29c-1.583-.141-3.236-.455-5.18-.934a.75.75 0 0 1-.548-.908Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
