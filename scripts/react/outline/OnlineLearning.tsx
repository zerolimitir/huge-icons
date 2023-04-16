import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOnlineLearning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.328 1.285a7.818 7.818 0 0 0-3.526 1.21c-.32.21-.406.287-.476.433-.261.539.12 1.107.715 1.064.191-.014.279-.05.559-.23a6.56 6.56 0 0 1 2.177-.891c.586-.127 1.86-.127 2.446 0 .78.169 1.455.443 2.172.882.477.292.698.315 1.014.106.28-.185.406-.641.257-.927-.127-.243-.597-.568-1.319-.913a7.618 7.618 0 0 0-2.763-.738c-.57-.045-.659-.045-1.256.004m.165 2.998a4.736 4.736 0 0 0-1.553.454c-.477.233-.587.338-.664.631a.71.71 0 0 0 .175.658c.252.288.592.333.975.13.129-.068.396-.18.594-.248.343-.119.389-.125.98-.125s.637.006.98.125c.198.068.465.18.594.248.383.203.723.158.975-.13.241-.274.257-.612.045-.931-.072-.107-.198-.192-.534-.357a4.52 4.52 0 0 0-1.64-.458c-.48-.043-.456-.043-.927.003M5.12 7.281a2 2 0 0 0-1.134.554c-.3.284-.475.554-.615.952L3.26 9.1l-.011 4.668c-.012 5.193-.022 4.983.257 5.552.212.434.675.889 1.134 1.115.357.175.598.234 1.42.345 1.9.256 3.598.814 4.835 1.589.461.289.692.366 1.105.366.412 0 .644-.077 1.105-.366 1.23-.77 2.962-1.34 4.835-1.59.818-.109 1.062-.168 1.42-.344.459-.226.922-.681 1.134-1.115.279-.569.269-.359.257-5.552L20.74 9.1l-.111-.313c-.307-.867-1.002-1.433-1.873-1.523a4.158 4.158 0 0 0-.702.036c-2.051.254-4.07.864-5.354 1.619l-.531.311-.172.098-.368-.218c-.587-.347-.86-.49-1.309-.683-1.208-.521-2.81-.934-4.377-1.127-.518-.065-.498-.064-.823-.019m1.02 1.562c1.903.279 3.392.762 4.643 1.506l.455.271.001 5.09c.001 2.799-.008 5.09-.02 5.09-.011 0-.184-.082-.384-.182-1.276-.641-2.952-1.117-4.768-1.355-.62-.081-.755-.125-.975-.318-.359-.316-.33.118-.331-5.052-.001-3.132.012-4.603.042-4.68a.823.823 0 0 1 .377-.396c.164-.074.311-.07.96.026m12.671-.028a.803.803 0 0 1 .386.398c.03.077.043 1.548.042 4.68-.001 5.17.028 4.736-.331 5.052-.22.193-.355.237-.975.318-1.802.236-3.487.712-4.733 1.337-.219.11-.408.2-.419.2-.012 0-.021-2.295-.021-5.1 0-2.805.014-5.1.032-5.1.017 0 .175-.091.35-.203 1.123-.716 2.78-1.266 4.689-1.557.587-.089.817-.095.98-.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOnlineLearning);
export default ForwardRef;