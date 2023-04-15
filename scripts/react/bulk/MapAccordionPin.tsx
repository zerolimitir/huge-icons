import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapAccordionPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.331 2.061c-1.003.217-1.703 1.243-1.533 2.247.1.591.457 1.115.967 1.417l.275.164v3.157c0 3.066.002 3.162.079 3.312.294.575 1.185.477 1.359-.149.027-.096.042-1.244.043-3.249l.001-3.1.243-.139c.461-.264.842-.79.951-1.313a1.999 1.999 0 0 0-1.551-2.35 1.682 1.682 0 0 0-.834.003M8.76 12.415V18.8h.115c.224 0 .893.198 1.269.377.485.23.953.538 1.966 1.293.862.644 1.308.931 1.783 1.151.326.15.864.315 1.157.353l.19.024v-7.824l-.209-.097c-.255-.119-.573-.43-.723-.707-.21-.389-.227-.579-.227-2.58l-.001-1.829-.35-.176c-.454-.229-.912-.533-1.75-1.162-1.188-.892-1.653-1.17-2.34-1.398a4.586 4.586 0 0 0-.65-.167l-.23-.027v6.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionPin);
export default ForwardRef;
