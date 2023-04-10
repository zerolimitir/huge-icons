import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapGpsBelow = (
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
            d='M20.645 15.882c.236-.166.45-.323.633-.462A1.86 1.86 0 0 0 22 13.925v-9.67c0-.853-1.028-1.347-1.736-.871-1 .672-2.297 1.42-3.514 1.747v5.87l1.317-.44c2.017-.671 3.936 1.248 3.263 3.264l-.685 2.057Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M8.75 14.443c.146-.29.348-.555.605-.776a2.6 2.6 0 0 1 .874-.492L15.25 11.5V5.289c-1.278-.107-2.264-.857-3.25-1.607-.986-.75-1.972-1.5-3.25-1.607v12.368Z'
        />
        <path
            fill='currentColor'
            d='M2.722 4.704c.99-.747 2.836-2.015 4.528-2.47v12.76c-1.217.327-2.514 1.075-3.514 1.747-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m13.597 17.611-2.894-.964c-.84-.28-.963-1.334-.371-1.842.102-.088.226-.16.371-.208l7.838-2.612a1.08 1.08 0 0 1 1.366 1.366l-1.377 4.132-1.235 3.706c-.329.985-1.722.985-2.05 0l-.964-2.894a1.08 1.08 0 0 0-.684-.684Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGpsBelow);
export default ForwardRef;
