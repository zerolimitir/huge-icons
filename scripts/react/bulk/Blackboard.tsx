import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBlackboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 8.316a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074m6.88 7.779a.951.951 0 0 0-.497.505c-.072.16-.081.262-.082.91l-.001.73H7.522c-3.85 0-5.539.013-5.684.044-.758.163-.758 1.269 0 1.432.292.063 20.032.063 20.324 0 .758-.163.758-1.269 0-1.432-.138-.029-1.025-.044-2.684-.044H17l-.001-.73c-.001-.648-.01-.75-.082-.91a.951.951 0 0 0-.497-.505c-.197-.093-.22-.094-1.42-.094s-1.223.001-1.42.094'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlackboard);
export default ForwardRef;
