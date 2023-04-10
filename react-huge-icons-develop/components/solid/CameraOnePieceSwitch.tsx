import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePieceSwitch = (
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
            d='M13.08 2.31c-1.048-.116-1.83.748-1.83 1.69v.5a.75.75 0 0 0 1.5 0V4c0-.072.03-.129.065-.163a.118.118 0 0 1 .101-.037A8.251 8.251 0 0 1 20.25 12a.75.75 0 0 0 1.5 0c0-5.02-3.793-9.153-8.67-9.69ZM3.75 12a.75.75 0 0 0-1.5 0c0 5.02 3.793 9.152 8.67 9.69 1.048.116 1.83-.748 1.83-1.69v-.5a.75.75 0 0 0-1.5 0v.5c0 .072-.03.129-.065.163a.118.118 0 0 1-.101.037A8.251 8.251 0 0 1 3.75 12ZM17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647ZM13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePieceSwitch);
export default ForwardRef;
