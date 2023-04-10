import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDollar = (
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
            d='M12 1a.75.75 0 0 1 .75.75v1.316a4.251 4.251 0 0 1 3.5 4.184.75.75 0 0 1-1.5 0 2.75 2.75 0 0 0-2-2.646v5.462a4.251 4.251 0 0 1 0 8.368v1.316a.75.75 0 0 1-1.5 0v-1.316a4.251 4.251 0 0 1-3.5-4.184.75.75 0 0 1 1.5 0 2.75 2.75 0 0 0 2 2.646v-5.462a4.251 4.251 0 0 1 0-8.368V1.75A.75.75 0 0 1 12 1Zm-.75 3.604a2.751 2.751 0 0 0 0 5.292V4.604Zm1.5 7v5.293a2.751 2.751 0 0 0 0-5.293Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDollar);
export default ForwardRef;
