import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '80vh', /* Full viewport height */
      textAlign: 'center' 
    }}>
      <h1>Welcome To Product Management System</h1>
    </div>
  );
}
