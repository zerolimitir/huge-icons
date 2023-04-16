import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStudents = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.82 2.981a3.824 3.824 0 0 0-.36.107 484.7 484.7 0 0 0-5.253 2.329c-.399.204-.605.545-.605 1.003 0 .459.202.788.613.996l.221.111.012 1.487c.012 1.467.013 1.488.104 1.647.148.257.332.359.648.359s.5-.102.648-.359c.089-.155.093-.203.112-1.306l.02-1.145.38.168.38.168.024.977c.022.905.032 1.003.13 1.328.396 1.31 1.397 2.274 2.694 2.597.492.122 1.33.121 1.792-.003 1.534-.411 2.617-1.677 2.778-3.245.023-.225.042-.69.042-1.034V8.54l1.341-.595c1.273-.565 1.349-.604 1.52-.794.325-.362.379-.819.15-1.268a.95.95 0 0 0-.291-.345c-.193-.137-5.274-2.406-5.64-2.518-.309-.095-1.143-.117-1.46-.039m1 1.464c.163.045 4.374 1.901 4.431 1.953.03.027-3.671 1.692-4.237 1.906-.239.091-.317.101-.614.085-.28-.016-.407-.047-.72-.178a356.534 356.534 0 0 1-4.032-1.79c-.02-.019 4.406-1.973 4.512-1.992.195-.035.502-.028.66.016m8.36 2.593c-.35.055-.453.097-2.355.942-1.722.766-1.879.844-2.019 1.003-.327.371-.335.881-.021 1.294l.135.176v.924c0 1.036.006 1.062.303 1.288.131.1.186.115.417.115.316 0 .501-.102.648-.359.08-.141.094-.232.112-.728l.02-.566.13.054.13.055v.404c0 1.385.74 2.458 1.979 2.869.281.093.385.106.841.106.456 0 .559-.013.84-.106a2.777 2.777 0 0 0 1.122-.689c.592-.584.856-1.266.858-2.22l.001-.38.23-.098c.818-.349 1.44-.656 1.561-.771.199-.189.286-.404.287-.708.001-.31-.095-.536-.312-.732-.172-.155-3.73-1.752-4.067-1.825a2.476 2.476 0 0 0-.84-.048m1.737 2.032c.682.302 1.227.56 1.211.573a42.77 42.77 0 0 1-1.208.56c-1.557.708-1.308.709-2.91-.004-.665-.297-1.209-.548-1.209-.559.001-.011.554-.266 1.23-.567 1.049-.467 1.26-.547 1.438-.55.185-.003.351.06 1.448.547M6.68 9.444c.981.382 1.192.443 1.598.465.49.027.826-.031 1.362-.235l.735-.278.314-.117-.017.53c-.015.467-.031.565-.131.811-.359.888-1.123 1.422-2.041 1.427-.646.004-1.145-.203-1.603-.663-.463-.464-.655-.972-.656-1.734-.001-.203.004-.37.009-.37.006 0 .199.074.43.164m12.064 2.765a1.344 1.344 0 0 1-1.021.904 1.314 1.314 0 0 1-1.443-.821c-.101-.271-.104-.351-.01-.311.488.207.763.271 1.17.272.448.002.74-.058 1.124-.228.119-.053.222-.08.229-.061a.893.893 0 0 1-.049.245M5.377 14.214c-1.847.629-3.182 1.788-3.623 3.145-.146.449-.198 1.138-.116 1.532.169.812.889 1.51 1.742 1.689.407.085 9.781.088 10.184.003.43-.092.777-.284 1.12-.623.614-.607.802-1.372.575-2.349-.33-1.426-1.728-2.715-3.679-3.396-.39-.136-.484-.153-.821-.154-.576-.001-.731.088-1.589.918-.375.364-.696.661-.714.661-.017 0-.338-.303-.714-.673-.818-.808-.961-.895-1.499-.917-.319-.013-.379-.001-.866.164m10.056.463c-.44.141-.642.335-.696.671-.084.526.471.984.978.808.126-.044.132-.04.571.384.547.529.75.637 1.194.637.448 0 .658-.112 1.2-.641l.439-.427.19.071c.724.269 1.359.782 1.525 1.232.119.319.113.481-.019.585-.104.082-.142.083-2.208.083-2.06 0-2.105.002-2.277.085-.535.259-.54 1.045-.008 1.316.149.076.244.079 2.373.079 2.064 0 2.235-.005 2.461-.076.488-.152.876-.49 1.097-.957.122-.256.127-.287.125-.767-.001-.575-.067-.822-.347-1.3-.19-.324-.7-.852-1.053-1.089-.617-.415-1.508-.771-1.932-.771-.423 0-.634.11-1.131.59l-.436.422-.43-.42c-.349-.34-.474-.436-.661-.506a1.505 1.505 0 0 0-.955-.009m-8.576 1.516c.745.731.924.852 1.377.932a1.53 1.53 0 0 0 .945-.154c.126-.064.418-.313.781-.667.319-.31.634-.613.701-.673l.121-.109.379.133c1.585.551 2.668 1.632 2.686 2.679.007.413-.217.699-.614.785-.155.033-1.482.042-4.893.033-4.482-.011-4.686-.015-4.82-.087-.343-.183-.459-.401-.429-.803.079-1.051 1.145-2.076 2.725-2.624.178-.062.331-.113.34-.115.009-.002.324.3.701.67'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudents);
export default ForwardRef;