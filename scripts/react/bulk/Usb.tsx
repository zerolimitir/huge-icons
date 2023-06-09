import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUsb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 1.775c-.249.118-.288.161-.951 1.052-.46.617-.549.761-.592.951a.994.994 0 0 0 .703 1.178c.262.071 2.319.058 2.568-.016.234-.069.476-.283.592-.522.112-.229.108-.626-.01-.849-.091-.173-.973-1.372-1.166-1.584-.268-.296-.768-.387-1.144-.21m5.96 2.798c-.366.121-.7.415-.886.781-.104.206-.114.263-.114.646 0 .385.01.439.117.651.146.288.472.6.773.74.192.09.285.107.57.107s.378-.017.57-.107c.301-.14.627-.452.773-.74.107-.212.117-.266.117-.651 0-.365-.013-.446-.098-.62a1.792 1.792 0 0 0-.709-.722c-.193-.097-.283-.117-.59-.126-.222-.007-.425.009-.523.041M5.049 6.622a1.085 1.085 0 0 0-.309.234c-.199.262-.22.37-.22 1.155 0 .71.003.74.104.942.119.239.284.38.574.49.296.112 1.308.112 1.604 0 .293-.112.457-.253.577-.498.105-.214.106-.222.093-.994l-.012-.778-.121-.195a1.042 1.042 0 0 0-.317-.317l-.195-.121-.784-.012c-.778-.011-.784-.011-.994.094m6.391 11.453a2.115 2.115 0 0 0-1.328 1.275c-.119.326-.119.974 0 1.3a2.071 2.071 0 0 0 1.244 1.24c.173.063.32.082.644.082s.471-.019.644-.082a2.071 2.071 0 0 0 1.244-1.24c.119-.326.119-.974 0-1.3a2.12 2.12 0 0 0-1.365-1.286c-.288-.085-.801-.079-1.083.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
