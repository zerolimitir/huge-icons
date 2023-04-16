import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDeposit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.776.528-1.337 1.325-1.601 2.277-.096.348-.108.46-.108 1.011 0 .551.012.663.108 1.011.463 1.669 1.868 2.844 3.56 2.977l.31.024V7h12v4.012l.31-.024c1.274-.1 2.493-.861 3.134-1.955 1.059-1.809.541-4.155-1.175-5.321a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m6.207 7.241c-.418.082-.658.251-1.435 1.013-.405.398-.788.803-.851.901-.393.612.245 1.381.914 1.101.08-.033.331-.243.557-.466l.413-.406.011 2.199.011 2.2.11.166c.291.44.969.44 1.26 0l.11-.166.011-2.199.012-2.2.412.406c.227.223.477.433.557.466.669.28 1.307-.489.914-1.101-.063-.098-.446-.503-.851-.901-.596-.585-.787-.748-.996-.85a1.734 1.734 0 0 0-1.159-.163'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeposit);
export default ForwardRef;