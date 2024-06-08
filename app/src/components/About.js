import React from 'react';
import teamMember1 from '../images/team-member1.jpg'; // เพิ่มรูปสมาชิกทีมในโฟลเดอร์ images
import teamMember2 from '../images/team-member2.jpg';
import teamMember3 from '../images/team-member3.jpg';

const About = () => {
    const team = [
        {
            img: teamMember1,
            name: 'John Doe',
            position: 'Lead Developer',
            description: 'John is a skilled developer with over 10 years of experience in web and application development.',
        },
        {
            img: teamMember2,
            name: 'Jane Smith',
            position: 'UI/UX Designer',
            description: 'Jane specializes in creating intuitive user interfaces and enhancing user experiences.',
        },
        {
            img: teamMember3,
            name: 'Mike Johnson',
            position: 'Backend Developer',
            description: 'Mike is an expert in server-side technologies and database management.',
        }
    ];

    return (
        <div className="about" style={{ height: '100vh' }}>
            <h1>About Us</h1>
            <div className="team-grid">
                {team.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.img} alt={member.name} className="team-pic" />
                        <h3>{member.name}</h3>
                        <h4>{member.position}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
