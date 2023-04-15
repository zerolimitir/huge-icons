import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapAccordionFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.54 2.118a.852.852 0 0 0-.2.16l-.12.127-.01 5.148c-.01 5.046-.009 5.149.068 5.275a.565.565 0 0 0 .415.279c.189.03.463-.103.568-.276.077-.127.079-.224.09-3.321l.011-3.19h2.06c2.257 0 2.228.003 2.43-.238.085-.101.108-.169.108-.326 0-.167-.051-.299-.34-.875l-.339-.679.339-.685c.374-.753.414-.934.265-1.18-.161-.263-.094-.257-2.811-.254-1.35.001-2.49.017-2.534.035M8.76 12.415V18.8h.115c.224 0 .893.198 1.269.377.485.23.953.538 1.966 1.293.862.644 1.308.931 1.783 1.151.326.15.864.315 1.157.353l.19.024v-7.824l-.209-.097c-.255-.119-.573-.43-.723-.707-.21-.389-.227-.579-.227-2.58l-.001-1.829-.35-.176c-.454-.229-.912-.533-1.75-1.162-1.188-.892-1.653-1.17-2.34-1.398a4.586 4.586 0 0 0-.65-.167l-.23-.027v6.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionFlag);
export default ForwardRef;
